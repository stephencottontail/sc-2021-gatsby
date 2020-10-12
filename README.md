# 2021 Personal Site #

Can I use Gatsby to create my personal site? Probably.

## Notes ##

* I'm messing around with the experimental version of `gatsby-source-wordpress`. It has a lot of benefits but the documentation is a bit sparse.
* We get environment variables in development from `dotenv` and in production from Netlify.
	** The experimental version apparently requires `WORDPRESS_URL` to point to `domain.tld/graphql`, not just `domain.tld`.
	** I probably don't need to protect my WP installation with Basic Auth since the URL isn't exposed, but better safe than sorry.
* We're using the Catamaran font.
