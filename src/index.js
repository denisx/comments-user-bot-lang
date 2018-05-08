const botEn = require('./bot/en')
const botRu = require('./bot/ru')

const bot = {
	en: botEn,
	ru: botRu
}

const telEn = require('./telegraph/en')

const tel = {
	en: telEn
}

class Index {
	constructor (lang) {
		this.bot = bot[lang || 'en']
		this.tel = tel[lang || 'en']
	}

	bot() {
		return this.bot
	}

	tel() {
		return this.tel
	}
}

module.exports = (lang) => {
	return new Index(lang)
}
