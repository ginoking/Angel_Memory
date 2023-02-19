package main

import (
	"html/template"
	"log"
	"net/http"
)

type IndexData struct {
	Title   string
	Content string
}

func request(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("./index.html"))
	data := new(IndexData)
	data.Title = "首頁"
	data.Content = "我的第一個go 網頁"
	tmpl.Execute(w, data)
	// w.WriteHeader(200)
	// w.Write([]byte(html))
}

func main() {
	http.HandleFunc("/", request)
	err := http.ListenAndServe(":8888", nil)

	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
