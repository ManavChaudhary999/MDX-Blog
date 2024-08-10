import RSS from 'rss';

import {BLOG_DESCRIPTION, BLOG_TITLE} from '@/constants';
import {getBlogPostList} from '@/helpers/file-helpers';

export async function GET() {
    var feed = new RSS({
        title: BLOG_TITLE,
        description: BLOG_DESCRIPTION,
        site_url: 'http://some-website.com/OurName',
    });

    const BlogPosts = await getBlogPostList();

    for (const post of BlogPosts) {
        feed.item({
            title: post.title,
            description: post.abstract,
            publishedOn: new Date(post.publishedOn),
            url: `http://some-website.com/OurName/blog/${post.slug}`,
        });
    }

    var xmlData = feed.xml({indent: true});

    return new Response(xmlData, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}