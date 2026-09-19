# Lyra downloads — 0.6.0

Static public download site only. This directory contains no app source, private patterns, signing keys or earlier installers. This site-only repository is public by explicit authorization; application source and build repositories remain private.

The three verified release artifacts are:

- `lyra-0.6.0-android-arm64.apk`
- `lyra-0.6.0-linux-x64.tar.gz`
- `lyra-0.6.0-windows-x64.zip`

Their hashes are recorded in `SHA256SUMS.txt`. The Pages workflow rejects missing files, checksum mismatches and corrupt ZIP/APK archives; it uploads only website assets, the checksum list and these three installers, excluding this README and workflow configuration.

For local layout review, run `python3 -m http.server 8080` from this directory.

## Deployment

Keep this site separate from the application source repository. It is published from the public site-only repository `rfsilva13/lyra-downloads`; the application source and Windows build repository remain private. See [GitHub's publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

In the private repository, select Settings → Pages → Source → GitHub Actions. Configure the `github-pages` environment to permit the `main` branch. Push the verified site to `main` or manually run “Publish download site.” Its job refuses to execute in a public repository. No private repository credentials are embedded in the website. The site uses relative links and therefore supports a repository Pages URL without a custom domain.

Workflow actions follow [GitHub's custom Pages workflow guidance](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
