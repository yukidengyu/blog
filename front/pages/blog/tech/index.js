import React from 'react';
import BlogLayout from '~/components/blog-layout'
import axios from '~/lib/axios'
import Link from 'next/link'



const Tech = ({ result }) => {
  return (
    <BlogLayout>
      <div id="main" role="main">
        <div className="archive">
          {result.map((r, i) => {
            return (
              <div className="list__item" key={i}>
                <article className="archive__item" itemScope itemType="http://schema.org/CreativeWork">
                  <div >
                    <h2 className="archive__item-title" itemProp="headline">
                      <Link href={{ pathname: '/blog/tech/detail', query: { name: `${r.url_name}`, id: `${r.id}` } }}>
                        <a>{r.title}</a>
                      </Link>
                    </h2>
                    <p className="page__meta"><i className="far fa-clock" aria-hidden="true"></i>{r.title}</p>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </BlogLayout >
  )
}

Tech.getInitialProps = async () => {
  const res = await axios({
    url: 'article/list',
  })
  return { result: res.data.data.article_list }

}

export default Tech