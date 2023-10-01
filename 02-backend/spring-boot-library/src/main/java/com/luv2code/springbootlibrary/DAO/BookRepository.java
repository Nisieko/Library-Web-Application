package com.luv2code.springbootlibrary.DAO;

import com.luv2code.springbootlibrary.entity.Book;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.data.domain.Page;

public interface BookRepository extends JpaRepository<Book, Long> {
    Page<Book> findByTitleContaining(@RequestParam("title")  String title, Pageable pageable);

    Page<Book> findByCategory(@RequestParam("category")  String category, Pageable pageable);


}