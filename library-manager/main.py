from library import Library
from book import Book

print(f"{'**_' * 10} Welcome {'_**' *10}")

library = Library()
isRunnning = True

# ! Ajout d'un livre
def addBook():
    try:
        title = input("Enter the book title: ")
        author = input("Enter the author's name: ")
        disponibility = input("Is the book still available (y/n): ")

        if(disponibility.lower() == 'y'):
            disponibility = True
        else:
            disponibility = False
        book = Book(title, author, disponibility)

        library.addBook(book)

        dispo = "disponilbe" if disponibility else "indisponible"
        print(f'You added the book {title} for the auther {author} and the disponibility: {dispo}')
        
    except Exception as e:
        print(f"Une erreur est survenue: {e}")

def borrowBook():
    try:
        title = input("Enter the book title you want to borrow: ")
        for book in library.listBooks():
            if book.title == title:
                if book.disponibility:
                    library.borrowBook(book)
                    print(f"You borrowed the book {title}")
                    return
                else:
                    print(f"The book {title} is not available for borrowing.")
                    return
        print(f"The book {title} is not found in the library.")
    except Exception as e:
        print(f"An error occurred: {e}")

def returnBook():
    try:
        title = input("Enter the book title you want to return: ")
        for book in library.listBorrowedBooks():
            if book.title == title:
                library.returnBook(book)
                print(f"You returned the book {title}")
                return
        print(f"The book {title} is not found in the library.")
    except Exception as e:
        print(f"An error occurred: {e}")
    
def listBooks():
    try:
        books = library.listBooks()
        if not books:
            print("No books available in the library.")
            return
        print("Books available in the library:")
        for book in books:
            availability = "Available" if book.disponibility else "Not Available"
            print(f"Title: {book.title}, Author: {book.author}, Availability: {availability}")
    except Exception as e:
        print(f"An error occurred: {e}")

def start():
    global isRunnning
    print("What do yo want to do ?")
    print("1. Add a Book")
    print("2. Borrow a Book")
    print("3. Return a Book")
    print("4. List Books")
    print("5. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        # ! Ajouter un livre
        addBook()

    elif choice == "2":
        # ! Emprunter un livre
        borrowBook()

    elif choice == "3":
        # ! Retourner un livre
        returnBook()

    elif choice == "4":
        # ! Lister les livres
        listBooks()

    elif choice == "5":
        isRunnning = False
        print("Exiting the program.")

    else:
        print("Invalid choice.")

if __name__ == "__main__":
    while isRunnning:
        start()