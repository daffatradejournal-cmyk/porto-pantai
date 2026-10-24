Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630

$bmp = New-Object System.Drawing.Bitmap $width, $height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

function Add-RoundedRect($path, [float]$x, [float]$y, [float]$w, [float]$h, [float]$r) {
    $d = $r * 2
    $path.AddArc($x, $y, $d, $d, 180, 90)
    $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
    $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
    $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
    $path.CloseFigure()
}

# 1. Background Fill (#fff9d4)
$bgBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#fff9d4"))
$g.FillRectangle($bgBrush, 0, 0, $width, $height)

# 2. Bottom Wave Accent
$wavePath = New-Object System.Drawing.Drawing2D.GraphicsPath
$wavePath.StartFigure()
$wavePath.AddLine(0, 570, 300, 550)
$wavePath.AddBezier(300, 550, 600, 595, 900, 545, 1200, 565)
$wavePath.AddLine(1200, 630, 0, 630)
$wavePath.CloseFigure()
$waveBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#ebdcae"))
$g.FillPath($waveBrush, $wavePath)

$wavePath2 = New-Object System.Drawing.Drawing2D.GraphicsPath
$wavePath2.StartFigure()
$wavePath2.AddLine(0, 595, 400, 575)
$wavePath2.AddBezier(400, 575, 750, 615, 1000, 580, 1200, 595)
$wavePath2.AddLine(1200, 630, 0, 630)
$wavePath2.CloseFigure()
$waveBrush2 = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#0284c7"))
$g.FillPath($waveBrush2, $wavePath2)

# Colors
$colorBlack = [System.Drawing.ColorTranslator]::FromHtml("#0f172a")
$brushBlack = New-Object System.Drawing.SolidBrush $colorBlack
$penBlack3 = New-Object System.Drawing.Pen $colorBlack, 3
$penBlack2 = New-Object System.Drawing.Pen $colorBlack, 2
$brushCard = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#fffdf5"))
$brushSky = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#0284c7"))
$brushMuted = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#475569"))
$brushGold = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#8c6239"))
$brushYellow = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#fde047"))

# 3. Left Profile Photo Card (Exact recreation of ProfilePhotoCard.tsx)
$cardX = 65.0
$cardY = 48.0
$cardW = 350.0
$cardH = 530.0

# Shadow
$shadowPath = New-Object System.Drawing.Drawing2D.GraphicsPath
Add-RoundedRect $shadowPath ($cardX + 8) ($cardY + 8) $cardW $cardH 28
$g.FillPath($brushBlack, $shadowPath)

# Card Body
$cardPath = New-Object System.Drawing.Drawing2D.GraphicsPath
Add-RoundedRect $cardPath $cardX $cardY $cardW $cardH 28
$g.FillPath($brushCard, $cardPath)
$g.DrawPath($penBlack3, $cardPath)

# Inner Photo Frame
$photoFrameX = $cardX + 18.0
$photoFrameY = $cardY + 18.0
$photoFrameW = $cardW - 36.0
$photoFrameH = 430.0

$photoClip = New-Object System.Drawing.Drawing2D.GraphicsPath
Add-RoundedRect $photoClip $photoFrameX $photoFrameY $photoFrameW $photoFrameH 20

$photoPath = "public/daffa.jpg"
if (Test-Path $photoPath) {
    $img = [System.Drawing.Image]::FromFile((Resolve-Path $photoPath).Path)
    $g.SetClip($photoClip)
    
    $scale = $photoFrameH / $img.Height
    $scaledW = $img.Width * $scale
    $scaledH = $photoFrameH
    $imgDrawX = $photoFrameX - (($scaledW - $photoFrameW) / 2)
    $imgDrawY = $photoFrameY
    
    $g.DrawImage($img, [float]$imgDrawX, [float]$imgDrawY, [float]$scaledW, [float]$scaledH)
    
    # Gradient overlay at bottom
    $gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush (
        (New-Object System.Drawing.PointF 0, ($photoFrameY + $photoFrameH - 130)),
        (New-Object System.Drawing.PointF 0, ($photoFrameY + $photoFrameH)),
        ([System.Drawing.Color]::FromArgb(0, 15, 23, 42)),
        ([System.Drawing.Color]::FromArgb(215, 15, 23, 42))
    )
    $g.FillRectangle($gradBrush, [float]$photoFrameX, [float]($photoFrameY + $photoFrameH - 130), [float]$photoFrameW, [float]130)
    $g.ResetClip()
    $img.Dispose()
}

$g.DrawPath($penBlack2, $photoClip)

# Overlay Name Badge inside photo (Bottom)
$badgeW = $photoFrameW - 32.0
$badgeH = 60.0
$badgeX = $photoFrameX + 16.0
$badgeY = $photoFrameY + $photoFrameH - 74.0

$badgePath = New-Object System.Drawing.Drawing2D.GraphicsPath
Add-RoundedRect $badgePath $badgeX $badgeY $badgeW $badgeH 12
$badgeBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(245, 255, 253, 245))
$g.FillPath($badgeBrush, $badgePath)
$penBadge = New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml("#0f172a")), 1.8
$g.DrawPath($penBadge, $badgePath)

$fontBadgeName = [System.Drawing.Font]::new("Segoe UI", [float]13.5, [System.Drawing.FontStyle]::Bold)
$fontBadgeSub = [System.Drawing.Font]::new("Consolas", [float]8.5, [System.Drawing.FontStyle]::Bold)
$g.DrawString("Muhammad Daffa", $fontBadgeName, $brushBlack, [float]($badgeX + 12), [float]($badgeY + 8))
$g.DrawString("S1 Sistem Informasi | UNISI", $fontBadgeSub, $brushGold, [float]($badgeX + 12), [float]($badgeY + 34))

# Under Photo Label
$fontMonoSmall = [System.Drawing.Font]::new("Consolas", [float]8.5, [System.Drawing.FontStyle]::Bold)
$g.DrawString("FOTO PROFIL", $fontMonoSmall, $brushGold, [float]($photoFrameX + 4), [float]($photoFrameY + $photoFrameH + 16))
$g.DrawString("ID // MUHAMMAD DAFFA", $fontMonoSmall, $brushGold, [float]($photoFrameX + $photoFrameW - 145), [float]($photoFrameY + $photoFrameH + 16))

# 4. Right Section (Header, Badges & Projects)
$rightX = 460.0

# 4a. Tag Badge "01 // PORTOFOLIO RESMI"
$tagPathShadow = New-Object System.Drawing.Drawing2D.GraphicsPath
Add-RoundedRect $tagPathShadow ($rightX + 3) (50 + 3) 220 34 10
$g.FillPath($brushBlack, $tagPathShadow)

$tagPath = New-Object System.Drawing.Drawing2D.GraphicsPath
Add-RoundedRect $tagPath $rightX 50 220 34 10
$g.FillPath($brushYellow, $tagPath)
$g.DrawPath($penBlack2, $tagPath)

$fontTag = [System.Drawing.Font]::new("Consolas", [float]10.5, [System.Drawing.FontStyle]::Bold)
$g.DrawString("01 // PORTOFOLIO RESMI", $fontTag, $brushBlack, [float]($rightX + 14), [float]58)

# 4b. Name Title
$fontTitle = [System.Drawing.Font]::new("Segoe UI Black", [float]38, [System.Drawing.FontStyle]::Bold)
$g.DrawString("MUHAMMAD DAFFA", $fontTitle, $brushBlack, [float]($rightX - 3), [float]94)

# 4c. Subtitle & University
$fontSubtitle = [System.Drawing.Font]::new("Segoe UI", [float]16, [System.Drawing.FontStyle]::Bold)
$g.DrawString("S1 Sistem Informasi - Web & System Developer", $fontSubtitle, $brushSky, [float]$rightX, [float]162)

$fontUni = [System.Drawing.Font]::new("Segoe UI", [float]12, [System.Drawing.FontStyle]::Regular)
$g.DrawString("Universitas Islam Indragiri (UNISI) - Indragiri Hilir, Riau", $fontUni, $brushMuted, [float]$rightX, [float]194)

# Divider Line
$penDivider = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(60, 15, 23, 42)), 1.5
$g.DrawLine($penDivider, [float]$rightX, [float]228, [float]1145, [float]228)

# 4d. Flagship Projects Showcase
$fontSecLabel = [System.Drawing.Font]::new("Consolas", [float]9.5, [System.Drawing.FontStyle]::Bold)
$g.DrawString("PROYEK UNGGULAN & REKAYASA SISTEM INFORMASI:", $fontSecLabel, $brushGold, [float]$rightX, [float]240)

function Draw-ProjectCard([float]$y, [string]$title, [string]$tag, [string]$desc) {
    $pW = 685.0
    $pH = 62.0
    
    $pShadow = New-Object System.Drawing.Drawing2D.GraphicsPath
    Add-RoundedRect $pShadow ($script:rightX + 3) ($y + 3) $pW $pH 12
    $script:g.FillPath($script:brushBlack, $pShadow)
    
    $pCard = New-Object System.Drawing.Drawing2D.GraphicsPath
    Add-RoundedRect $pCard $script:rightX $y $pW $pH 12
    $script:g.FillPath($script:brushCard, $pCard)
    $script:g.DrawPath($script:penBlack2, $pCard)
    
    $fTitle = [System.Drawing.Font]::new("Segoe UI", [float]12, [System.Drawing.FontStyle]::Bold)
    $fTag = [System.Drawing.Font]::new("Consolas", [float]8.5, [System.Drawing.FontStyle]::Bold)
    $fDesc = [System.Drawing.Font]::new("Segoe UI", [float]9, [System.Drawing.FontStyle]::Regular)
    
    $script:g.DrawString($title, $fTitle, $script:brushBlack, [float]($script:rightX + 14), [float]($y + 8))
    $script:g.DrawString("[ " + $tag + " ]", $fTag, $script:brushSky, [float]($script:rightX + $pW - 275), [float]($y + 11))
    $script:g.DrawString($desc, $fDesc, $script:brushMuted, [float]($script:rightX + 14), [float]($y + 34))
}

Draw-ProjectCard 264 "PasarTembilahan" "Next.js | Midtrans | MySQL" "Platform E-Commerce & Rantai Pasok Ekspor Komoditas Kelapa UMKM Inhil"
Draw-ProjectCard 338 "Kasir Pintar" "100% Offline-First POS" "Aplikasi Web POS Ritel UMKM, Scan Barcode Kamera & Cetak Thermal Printer"
Draw-ProjectCard 412 "Hitung Sehat v2" "Microservices | Gemini AI" "Platform Web Tracking Nutrisi, Kalori & AI Food Scanner Computer Vision"

# 4e. Bottom Website URL Banner
$urlBannerY = 488.0
$urlBannerW = 685.0
$urlBannerH = 52.0

$bannerShadow = New-Object System.Drawing.Drawing2D.GraphicsPath
Add-RoundedRect $bannerShadow ($rightX + 4) ($urlBannerY + 4) $urlBannerW $urlBannerH 12
$g.FillPath($brushBlack, $bannerShadow)

$bannerPath = New-Object System.Drawing.Drawing2D.GraphicsPath
Add-RoundedRect $bannerPath $rightX $urlBannerY $urlBannerW $urlBannerH 12
$g.FillPath($brushBlack, $bannerPath)

$fontUrlTitle = [System.Drawing.Font]::new("Consolas", [float]9.5, [System.Drawing.FontStyle]::Bold)
$brushWhite = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#f8fafc"))
$fontUrlLink = [System.Drawing.Font]::new("Segoe UI Black", [float]14.5, [System.Drawing.FontStyle]::Bold)
$brushYellowText = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#fde047"))

$g.DrawString("KUNJUNGI WEBSITE PORTOFOLIO RESMI:", $fontUrlTitle, $brushWhite, [float]($rightX + 18), [float]($urlBannerY + 8))
$g.DrawString("muhammaddaffa.my.id", $fontUrlLink, $brushYellowText, [float]($rightX + 18), [float]($urlBannerY + 25))

$fontUrlBadge = [System.Drawing.Font]::new("Consolas", [float]9, [System.Drawing.FontStyle]::Bold)
$g.DrawString("LIVE & VERIFIED", $fontUrlBadge, $brushWhite, [float]($rightX + $urlBannerW - 155), [float]($urlBannerY + 18))

# Save output
$outputPath = "public/og-image.png"
$bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()

Write-Output "OG Image created successfully at: $outputPath (1200 x 630)"
