export class Article {

    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, vote?: number) { // ? -> means its optional.
        this.title = title;
        this.link = link;
        this.votes = vote || 0; // if vote are given takes vote value or else make it as 0
    }

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }

}