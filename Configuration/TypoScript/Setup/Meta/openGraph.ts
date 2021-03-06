page.headerData.654 {
	### Open graph ###
	30 = COA
	30 {
		### og:type ###
		5 = TEXT
		5 {
			value < plugin.tx_csseo.social.openGraph.type
			wrap = <meta property="og:type" content="|" />
		}

		### og:title ###
		10 = TEXT
		10 {
			data = page:tx_csseo_og_title // page:title
			htmlSpecialChars = 1
			wrap = <meta property="og:title" content="|" />
		}

		### og:description ###
		20 = TEXT
		20 {
			data = page:tx_csseo_og_description // page:description
			htmlSpecialChars = 1
			wrap = <meta property="og:description" content="|" />
			required = 1
		}

		### og:url ###
		30 =< lib.currentUrl
		30 {
			typolink {
				additionalParams >
				addQueryString.exclude = cHash,utm_medium,utm_source,utm_campaign,utm_content,tx_search_pi1[query],src,ref,gclid,cx,ie,cof,siteurl,zanpid,_ult
			}
			wrap = <meta property="og:url" content="|" />
		}

		### og:site_name ###
		40 = TEXT
		40 {
			data = TSFE:tmpl|sitetitle
			htmlSpecialChars = 1
			wrap = <meta property="og:site_name" content="|" />
		}

		### og:image ###
		50 = FILES
		50 {
			references {
				table = pages
				uid.data = page:uid
				fieldName = tx_csseo_og_image
			}
			renderObj = TEXT
			renderObj {
				stdWrap.typolink {
					parameter.stdWrap {
						cObject = IMG_RESOURCE
						cObject.file {
							import.data = file:current:uid
							treatIdAsReference = 1
							height < plugin.tx_csseo.social.openGraph.image.height
							width < plugin.tx_csseo.social.openGraph.image.width
						}
					}
					returnLast = url
					forceAbsoluteUrl = 1
				}
				required = 1
				wrap = <meta property="og:image" content="|" />
			}
		}

		### default og:image ###
		55 < .50.renderObj
		55 {
			stdWrap.typolink.parameter.stdWrap.cObject.file.import.data = path:{$plugin.tx_csseo.social.defaultImage}
			stdWrap.if.isFalse.field = tx_csseo_og_image
		}
	}
}