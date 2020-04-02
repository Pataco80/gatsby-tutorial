import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/blog.module.css'

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>The Blog Page</h1>
        <p>Dolore mollit aliquip fugiat proident velit velit. Minim consectetur eiusmod minim nostrud nisi velit qui velit velit aliquip. Sunt minim non laboris ea. Exercitation sunt consectetur proident commodo irure culpa esse laboris exercitation dolore aliqua aliqua non aliqua. Magna cillum elit id fugiat incididunt nostrud esse consequat culpa sit ex. Commodo nostrud consequat id aliqua quis veniam anim mollit labore qui.</p>
        <p>Dolore mollit aliquip fugiat proident velit velit. Minim consectetur eiusmod minim nostrud nisi velit qui velit velit aliquip. Sunt minim non laboris ea. Exercitation sunt consectetur proident commodo irure culpa esse laboris exercitation dolore aliqua aliqua non aliqua. Magna cillum elit id fugiat incididunt nostrud esse consequat culpa sit ex. Commodo nostrud consequat id aliqua quis veniam anim mollit labore qui.</p>
        <p className={styles.text}>Dolore mollit aliquip fugiat proident velit velit. Minim consectetur eiusmod minim nostrud nisi velit qui velit velit aliquip. Sunt minim non laboris ea. Exercitation sunt consectetur proident commodo irure culpa esse laboris exercitation dolore aliqua aliqua non aliqua. Magna cillum elit id fugiat incididunt nostrud esse consequat culpa sit ex. Commodo nostrud consequat id aliqua quis veniam anim mollit labore qui.</p>
      </div>
    </Layout>
  )
}

export default blog
