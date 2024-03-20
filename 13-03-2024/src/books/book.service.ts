import bookModel from './book.schema'

export class BookService {
    async create(book: any) {
        const createdBook = bookModel.create(book)
        return createdBook
    }

    async findById(id: any) {
        const findedBook = await bookModel.findById(id)
        return findedBook
    }

    async findAll(){
        const findedAllBook = await bookModel.find()
        return findedAllBook
    }

    async update(id: any, book: any){
        const updateBook = await bookModel.findByIdAndUpdate(id, book)
        return updateBook
    
    }

    async delete(id: any){
        const deleteBook = await bookModel.findByIdAndDelete(id)
        return deleteBook
    }
    
}