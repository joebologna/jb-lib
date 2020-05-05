#!/usr/bin/awk -f
BEGIN {
    while(getline <"genpw.html") {
        if ($0 ~ "<link href=\"genpw.css\" rel=\"stylesheet\" />") {
            print "<style>"
            while ((getline<"genpw.css") > 0) {print}
            print "</style>"
        } else if ($0 ~ "<script src=\"genpw.js\"></script>") {
            print "<script>"
            while ((getline<"genpw.js") > 0) {print}
            print "</script>"
        } else {
            print
        }
    }
    exit
}
