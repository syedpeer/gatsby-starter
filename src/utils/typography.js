import Typography from 'typography'
import gray from 'gray-percentage'

const typography = new Typography(
	{
		baseFontSize: `16px`,
		baseLineHeight: 1.62,
		googleFonts: [
			{
				name: `Poppins`,
				styles: [`100`,`200`,`400`,`300`,`500`,`600`,`700`],
			}
		],
		bodyFontFamily: [
			`Poppins`,
			`sans-serif`,
		],
		scaleRatio: 2,
		bodyWeight: 300,
		headerWeight: 600,
		boldWeight: `bold`,
		overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
			body: {
				color: gray(23, `warm`),
			},
			h1: scale(4 / 4),
			h2: scale(3 / 4),
			h3: scale(2 / 4),
			h4: scale(1 / 6),
			h5: scale(-1 / 6),
			h6: scale(-2 / 6),
			blockquote: {
				...scale(1 / 4),
				borderLeft: `${rhythm(1 / 6)} solid #eceeef`,
				paddingTop: rhythm(1 / 3),
				paddingBottom: rhythm(1 / 3),
				paddingLeft: rhythm(2 / 3),
				paddingRight: rhythm(2 / 3),
			},
			'blockquote > :last-child': {
				marginBottom: 0,
			},
			'blockquote cite': {
			...adjustFontSizeTo(options.baseFontSize),
				color: gray(54, `204`),
				fontWeight: options.bodyWeight,
				fontStyle: `normal`,
			}
		})
	}
)

export default typography