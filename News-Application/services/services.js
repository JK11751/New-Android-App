import { API_KEY, endpoint, country } from '../config/config';

export async function services(category = 'general') {
    let articles = await fetch(`${endpoint}?country=${country}&category=${category}`, {
        headers: {
            'X-API-KEY': '2943a9634988450c9794e279d251b842'
        }
    });

    let result = await articles.json();
    articles = null;

    return result.articles;
}