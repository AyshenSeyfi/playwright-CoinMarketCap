export class HomePage {
    constructor(page) {
        this.page = page
    }

   visit = async () => {
       await this.page.goto("https://coinmarketcap.com/")
    }
}