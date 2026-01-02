// 1. DATA: 30 CURATED BOOKS
const BOOKS_DATA = [
    { title: "SICP", author: "Abelson & Sussman", cat: "CS Theory", link: "https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book.html", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400" },
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke", cat: "JavaScript", link: "https://eloquentjavascript.net/", img: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400" },
    { title: "Deep Learning", author: "Ian Goodfellow", cat: "AI", link: "https://www.deeplearningbook.org/", img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400" },
    { title: "Operating Systems: Three Easy Pieces", author: "Arpaci-Dusseau", cat: "OS", link: "https://ostep.org/", img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400" },
    { title: "Introduction to Algorithms", author: "Cormen et al.", cat: "Algorithms", link: "https://archive.org/details/introduction-to-algorithms-3rd-edition", img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400" },
    { title: "Computer Networking", author: "Kurose & Ross", cat: "Networking", link: "https://gaia.cs.umass.edu/kurose_ross/", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400" },
    { title: "Think Python", author: "Allen B. Downey", cat: "Python", link: "https://greenteapress.com/wp/think-python-2e/", img: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec7?w=400" },
    { title: "The Rust Book", author: "Klabnik", cat: "Systems", link: "https://doc.rust-lang.org/book/", img: "https://images.unsplash.com/photo-1525547718571-039426723551?w=400" },
    { title: "Automate Boring Stuff", author: "Al Sweigart", cat: "Python", link: "https://automatetheboringstuff.com/", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400" },
    { title: "Foundations of Data Science", author: "Blum et al.", cat: "Data Science", link: "https://www.cs.cornell.edu/jeh/book.pdf", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" },
    { title: "Distributed Systems", author: "Van Steen", cat: "Architecture", link: "https://www.distributed-systems.net/", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400" },
    { title: "AI: Modern Approach", author: "Russell & Norvig", cat: "AI", link: "http://aima.cs.berkeley.edu/", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400" },
    { title: "Pro Git", author: "Scott Chacon", cat: "Tools", link: "https://git-scm.com/book/en/v2", img: "https://images.unsplash.com/photo-1556075798-4825dfabb46e?w=400" },
    { title: "High Perf Networking", author: "Ilya Grigorik", cat: "Networking", link: "https://hpbn.co/", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400" },
    { title: "Modern C", author: "Jens Gustedt", cat: "Systems", link: "https://modernc.gforge.inria.fr/", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400" },
    { title: "Learn You a Haskell", author: "Miran Lipovača", cat: "Functional", link: "http://learnyouahaskell.com/", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400" },
    { title: "Machine Learning", author: "Andrew Ng", cat: "AI", link: "https://www.mlyearning.org/", img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=400" },
    { title: "R for Data Science", author: "Hadley Wickham", cat: "Data Science", link: "https://r4ds.had.co.nz/", img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400" },
    { title: "NLP Notes", author: "Eisenstein", cat: "AI", link: "https://github.com/jacobeisenstein/gt-nlp-class/", img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=400" },
    { title: "Building Microservices", author: "Sam Newman", cat: "Architecture", link: "https://www.nginx.com/resources/library/building-microservices/", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400" },
    { title: "Algorithms, 4th Edition", author: "Robert Sedgewick", cat: "Algorithms", link: "https://algs4.cs.princeton.edu/home/", img: "https://images.unsplash.com/photo-1509228463558-399364424930?w=400" },
    { title: "Database Internals", author: "Alex Petrov", cat: "Databases", link: "https://www.databass.dev/", img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400" },
    { title: "Site Reliability Engineering", author: "Google Team", cat: "SRE", link: "https://sre.google/sre-book/", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400" },
    { title: "Software Engineering at Google", author: "Winters et al.", cat: "Software Eng", link: "https://abseil.io/resources/swe-book", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400" },
    { title: "C++ Primer", author: "Stanley Lippman", cat: "Systems", link: "https://archive.org/details/cppprimer", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400" },
    { title: "Category Theory", author: "Bartosz Milewski", cat: "Functional", link: "https://bartoszmilewski.com/", img: "https://images.unsplash.com/photo-1509228463558-399364424930?w=400" },
    { title: "Intro to Probability", author: "Grinstead & Snell", cat: "Math", link: "https://dartmouth.edu/~chance/", img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400" },
    { title: "Programming Languages", author: "Shriram", cat: "CS Theory", link: "https://papl.cs.brown.edu/2020/", img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400" },
    { title: "Security Engineering", author: "Ross Anderson", cat: "Security", link: "https://www.cl.cam.ac.uk/~rja14/book.html", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400" },
    { title: "Modern Operating Systems", author: "Tanenbaum", cat: "OS", link: "https://archive.org/details/modernoperatingsystems", img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400" }
];

// 2. BST IMPLEMENTATION
class Node {
    constructor(book) {
        this.book = book;
        this.left = null;
        this.right = null;
    }
}

class BookBST {
    constructor() {
        this.root = null;
    }

    insert(book) {
        const newNode = new Node(book);
        if (!this.root) this.root = newNode;
        else this._insertNode(this.root, newNode);
    }

    _insertNode(node, newNode) {
        if (newNode.book.title.toLowerCase() < node.book.title.toLowerCase()) {
            if (!node.left) node.left = newNode;
            else this._insertNode(node.left, newNode);
        } else {
            if (!node.right) node.right = newNode;
            else this._insertNode(node.right, newNode);
        }
    }

    // Returns sorted list (In-order traversal)
    getSortedList(node = this.root, list = []) {
        if (node) {
            this.getSortedList(node.left, list);
            list.push(node.book);
            this.getSortedList(node.right, list);
        }
        return list;
    }

    // Search function
    search(query, type) {
        const results = [];
        this._searchRecursive(this.root, query.toLowerCase(), type, results);
        return results;
    }

    _searchRecursive(node, query, type, results) {
        if (!node) return;
        if (node.book[type].toLowerCase().includes(query)) results.push(node.book);
        this._searchRecursive(node.left, query, type, results);
        this._searchRecursive(node.right, query, type, results);
    }
}

// 3. UI CONTROLLER
const library = new BookBST();
BOOKS_DATA.forEach(book => library.insert(book));

const UI = {
    renderGrid(books) {
        const grid = document.getElementById('bookGrid');
        grid.innerHTML = books.map(book => `
            <div class="book-card">
                <img src="${book.img}" class="book-img" loading="lazy">
                <div class="book-info">
                    <span style="color:var(--gold); font-size: 11px; font-weight:700;">${book.cat.toUpperCase()}</span>
                    <h4>${book.title}</h4>
                    <p>By ${book.author}</p>
                    <a href="${book.link}" target="_blank" class="read-btn">Access Library</a>
                </div>
            </div>
        `).join('');
    },

    initSearch() {
        const input = document.getElementById('searchInput');
        input.addEventListener('input', (e) => {
            const query = e.target.value;
            const type = document.getElementById('searchType').value;
            const results = query ? library.search(query, type) : library.getSortedList();
            this.renderGrid(results);
        });
    },

    init() {
        this.renderGrid(library.getSortedList());
        this.initSearch();
    }
};

document.addEventListener('DOMContentLoaded', () => UI.init());
