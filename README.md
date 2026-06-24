# [mobiuslau.github.io](http://mobiuslau.github.io)

## Polyfill Security Notice

Polyfill compatibility scripts were referenced on this website until `2026-06-24`. I sincerely apologise for noticing the threat so late. Polyfill was a service which hosted compatibility scripts, but was compromised in 2024. Today, `2026-06-24`, a user reported to me that my website was asking for credentials, which I was able to reproduce, discovered Polyfill was the supply-chain attack vector, and removed any references to it immediately. This website SHOULD NOT ask for credentials ever. Therefore, if any user entered credentials into a pop-up while visiting my website, I recommend changing the passwords for everything that the username-password combination would compromise.

## Other stuff:

Honestly the following is just some reference.

Steps:

- `jekyll new ./`
- `add - gem "github-pages", "~> 219", group: :jekyll_plugins - To gemfile`
- `bundle update jekyll`
- `bundle install`
- `bundle add webrick`
- `bundle exec jekyll serve`

Then check localhost.

---

bundle install installs dependencies as written in gemfile.lock.


- https://docs.github.com/en/get-started/quickstart/create-a-repo
- https://surge.sh/help/deploying-a-jekyll-project
- https://github.com/jekyll/jekyll/issues/8523
- https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll
- https://github.com/prose/starter/issues/44