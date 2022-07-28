import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'

const Home: NextPage = () => {

  const [file, setFile] = useState()
  const [resImg, setResImg] = useState()

  const handleChange = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend =() => {
      setFile(reader.result as any)
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await axios.post('http://localhost:3000/api/image', {img: file})
    try {
      console.log(result.data)
      setResImg(result.data.url)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={e => onSubmit(e)}>
        <input type="file" name="" id="" onChange={e => handleChange(e)}/>
        <button type='submit'> sumbit</button>
      </form>

      <img src={file} alt="" />

      <p>from cloudinary</p>
      <img src={resImg} />
    </div>
  )
}

export default Home
