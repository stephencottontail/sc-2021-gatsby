# 2021 Personal Site #

Can I use Gatsby to create my personal site? Probably.

## Notes ##

* I'm messing around with the experimental version of `gatsby-source-wordpress`. It has a lot of benefits but the documentation is a bit sparse.
* `dotenv` is primarily for exporting `WORDPRESS_URL` from either `.env.production` or `.env.development` depending on the situation, like they do at Elevate Security. This probably doesn't matter much for my situation, but I figured why the heck not.
** The experimental version apparently requires `WORDPRESS_URL` to point to `domain.tld/graphql`, not just `domain.tld`.
* We're using the Catamaran font.
