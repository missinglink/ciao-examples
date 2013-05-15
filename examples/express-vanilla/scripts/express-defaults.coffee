
#> Hit the http root
path: '/'

#? Should announce server software 
response.should.have.header 'x-powered-by', 'Express'