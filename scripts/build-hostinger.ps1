param(
  [Parameter(Mandatory = $true)]
  [ValidatePattern('^https://[^/]+$')]
  [string]$SiteUrl
)

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$pnpm = 'C:\Users\Asus VivoBook\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd'
$releaseDirectory = Join-Path $projectRoot 'release\hostinger'
$zipPath = Join-Path $releaseDirectory 'aplicanza-hostinger-static.zip'
$outDirectory = Join-Path $projectRoot 'out'

if ($SiteUrl -match 'TU-DOMINIO|localhost') {
  throw 'Indique el dominio definitivo, por ejemplo: https://ejemplo.com'
}

$env:NEXT_PUBLIC_SITE_URL = $SiteUrl
$env:NEXT_PUBLIC_CONTACT_MODE = 'whatsapp'
$env:NEXT_PUBLIC_WHATSAPP_NUMBER = '573002968009'

Push-Location $projectRoot
try {
  & $pnpm run typecheck
  if ($LASTEXITCODE -ne 0) { throw 'Falló la verificación de TypeScript.' }

  & $pnpm run build
  if ($LASTEXITCODE -ne 0) { throw 'Falló la exportación estática.' }

  if (-not (Test-Path -LiteralPath (Join-Path $outDirectory 'index.html'))) {
    throw 'No se generó out\index.html.'
  }
  if (-not (Test-Path -LiteralPath (Join-Path $outDirectory '.htaccess'))) {
    throw 'No se generó out\.htaccess.'
  }

  New-Item -ItemType Directory -Force -Path $releaseDirectory | Out-Null
  if (Test-Path -LiteralPath $zipPath) { Remove-Item -LiteralPath $zipPath -Force }
  $siteFiles = Get-ChildItem -LiteralPath $outDirectory -Force
  Compress-Archive -Path $siteFiles.FullName -DestinationPath $zipPath -Force

  $archive = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
  try {
    $entries = $archive.Entries.FullName
    if ($entries -notcontains 'index.html' -or $entries -notcontains '.htaccess') {
      throw 'El ZIP no tiene index.html y .htaccess en la raíz.'
    }
    if ($entries | Where-Object { $_ -match '^[^/]+/index\.html$' }) {
      throw 'El ZIP contiene una carpeta padre; debe extraerse directamente en public_html.'
    }
  } finally {
    $archive.Dispose()
  }

  Write-Output "Paquete listo: $zipPath"
} finally {
  Pop-Location
}
