
    class Storage {
        constructor(test = "...") {
            const that = this
            try { 
                localStorage.setItem("storage-test", test)
                localStorage.removeItem("stotage-test")
                that.cloudness = true
                } catch { that.cloudness = false }
            this.data = new Array()
            this.set = function(name, item) {
                if(that.cloudness) { localStorage.setItem(name, item) }
                var list = new Array()
                for(var i = 0; i < that.data.length+1; i++) {
                    if(that.data[i] && that.data[i].name != name) { list.push(that.data[i]) }
                    else { list.push({ name: name, item: item }) }
                    }; that.data = list; return list.length
                }
            this.get = function(name) {
                if(!that.cloudness) {
                    for(var i = 0; i < that.data.length; i++) {
                        if(that.data[i].name == name) { return that.data[i].item }
                        }; return null
                    } else { return localStorage.getItem(name) }
                }
            this.remove = function(name) {
                if(that.cloudness) { localStorage.removeItem(name) }
                var list = new Array()
                for(var i = 0; i < that.data.length; i++) {
                    if(that.data[i].name != name) { list.push(that.data[i]) }
                    }; return that.data = list
                }
           this.clear = function() {
              if(that.cloudness) { localStorage.clear(); thar.data = [] }
              else { that.data = [] }
              }
            }
        }; const storage = new Storage()
        
