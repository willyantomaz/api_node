import app from '../src/books/app'
import { describe, it, expect } from '@jest/globals'
import * as  request from 'supertest'
import BookModel from '../src/books/book.schema'
import mongoose from 'mongoose'


describe('teste', () => {
    it("deve inserir um livro de dados", async () => {
        const BookMock = {
            title: "String",
            author: "String",
            ISBN: "String",
            pageNumber: 2
        }


        const response = await request.default(app).post('/books').send(BookMock)
        const findedBook = await BookModel.findById(response.body._id)

        expect(response.status).toEqual(201);
        expect(response.body._id).toBeDefined;
        expect(BookMock.title).toBe(findedBook?.title);
        expect(BookMock.author).toBe(findedBook?.author);
        expect(BookMock.ISBN).toBe(findedBook?.ISBN);
        expect(BookMock.pageNumber).toBe(findedBook?.pageNumber);


    })

    it("deve recuperar livro de dados", async () => {


        const response = await request.default(app).get('/books')
        const totalBooks = await BookModel.countDocuments()

        expect(response.status).toEqual(200);
        expect(response.body.letgh).toEqual(totalBooks);



    })
})