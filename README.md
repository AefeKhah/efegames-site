# Efegames Website

Static website for `efegames.com`, designed for GitHub Pages.

## Files

- `index.html`: Efegames landing page and Fish Memory product showcase.
- `privacy.html`: Privacy Policy for Efegames apps, including Fish Memory.
- `support.html`: Support page for App Store and user support links.
- `CNAME`: Custom domain record for GitHub Pages.
- `.nojekyll`: Keeps GitHub Pages from running Jekyll processing.

## Publish On GitHub Pages

1. Create or open the GitHub repository that will host the website.
2. Copy the contents of this `efegames-site` folder to the branch/folder GitHub Pages will serve.
3. Commit and push the files.
4. In GitHub, open `Settings > Pages`.
5. Choose the publishing source, usually `Deploy from a branch`.
6. Select the branch and folder that contains `index.html`.
7. Set the custom domain to `efegames.com`.
8. Verify the custom domain in GitHub if GitHub prompts for ownership verification.
9. Wait for GitHub Pages to finish DNS verification and HTTPS certificate provisioning.

## DNS Records For IHS

Add the custom domain in GitHub Pages before changing DNS records in IHS.

For the apex domain `efegames.com`, create these `A` records in the IHS DNS panel:

```text
@  A  185.199.108.153
@  A  185.199.109.153
@  A  185.199.110.153
@  A  185.199.111.153
```

For `www.efegames.com`, create this `CNAME` record:

```text
www  CNAME  AefeKhah.github.io
```

Optional IPv6 records:

```text
@  AAAA  2606:50c0:8000::153
@  AAAA  2606:50c0:8001::153
@  AAAA  2606:50c0:8002::153
@  AAAA  2606:50c0:8003::153
```

Remove old parking, forwarding, or hosting records that conflict with these values. Avoid wildcard records such as `*.efegames.com` unless you have a specific reason and understand the takeover risk.

After DNS resolves, enable `Enforce HTTPS` in GitHub Pages. DNS propagation can take up to 24 hours.

## Quick DNS Check

After publishing, run:

```bash
dig efegames.com +noall +answer -t A
dig www.efegames.com +nostats +nocomments +nocmd
```
