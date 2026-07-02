class Library:
    def __init__(self):
        self.books = []
        self.borrowed_books = []

    def addBook(self, book):
        self.books.append(book)

    def borrowBook(self, book):
        if book in self.books:
            self.books.remove(book)
            self.borrowed_books.append(book)
            return book
        else:
            return None

    def returnBook(self, book):
        if book in self.borrowed_books:
            self.borrowed_books.remove(book)
            self.books.append(book)

    def listBooks(self):
        return self.books
    def listBorrowedBooks(self):
        return self.borrowed_books