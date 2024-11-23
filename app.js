var i=0;
    
        function change()
        {
            var arr=new Array();
            arr[0]="https://images.unsplash.com/photo-1566959621395-9200c65ba74b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kaWEsTW9udW1lbnRzfHx8fHx8MTYyNjY3ODQ2MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2480";
            arr[1]="https://images.unsplash.com/photo-1524229648276-e66561fe45a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kaWEsTW9udW1lbnRzfHx8fHx8MTYyNjY3OTE5Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2480";
            arr[2]="https://images.unsplash.com/photo-1477586957327-847a0f3f4fe3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kaWEsTW9udW1lbnRzfHx8fHx8MTYyNjY3OTQ4OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2480";
            arr[3]="https://images.unsplash.com/photo-1624902525150-cbb93356b93f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kaWEsTW9udW1lbnRzfHx8fHx8MTYyNjY3OTMzMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2480";
            arr[4]="https://images.unsplash.com/photo-1470075446540-4391a96ec621?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kaWEsYmVhY2h8fHx8fHwxNjI2NjgwNDY4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2480";
            arr[5]="https://images.unsplash.com/photo-1600941393513-a5224603246a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVsaGksTW9udW1lbnRzfHx8fHx8MTYyNjY4MDcyNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2480";
            // arr[6]="https://images.unsplash.com/photo-1548013146-72479768bada?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kaWEsTW9udW1lbnRzfHx8fHx8MTYyNjY4MDE3Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2480";
            // arr[7]="https://images.unsplash.com/photo-1442570468985-f63ed5de9086?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kaWEsYmVhY2h8fHx8fHwxNjI2NjgwNTQ3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2480";
            // arr[8]="https://images.unsplash.com/photo-1585828068970-7b75082485cd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kaWEsTW9udW1lbnRzfHx8fHx8MTYyNjY4MDIyNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2480";
            // arr[9]="https://images.unsplash.com/photo-1599978559047-8e83c06e57e2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kaWEsTW9udW1lbnRzfHx8fHx8MTYyNjY4MDI4Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2480";
           
            
            if(i==arr.length)
            {
                i=0;
                f1.image1.src=arr[i];
                i++;
            }
            else
            {
                f1.image1.src=arr[i];
                i++;
            }
            setTimeout("change()",2000);
        }
        window.onload=change;
        // <div class="container_f1">
        // <form name="f1" class="f1">
        //     <img class="image1" name="image1" src="https://source.unsplash.com/2480x1080/?india,monuments" alt=""></img>
        // </form></div>


        // JavaScript to handle active class toggle
document.getElementById('home-link').addEventListener('click', function() {
    setActiveLink('home-link');
});

document.getElementById('experience-link').addEventListener('click', function() {
    setActiveLink('experience-link');
});

document.getElementById('reviews-link').addEventListener('click', function() {
    setActiveLink('reviews-link');
});

function setActiveLink(activeLinkId) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active')); // Remove 'active' from all links
    document.getElementById(activeLinkId).classList.add('active'); // Add 'active' to the clicked link
}

// hotel booking
function formatDateToYYYYMMDD(date) {
    // Convert input date to the format YYYY-MM-DD
    var d = new Date(date);
    var year = d.getFullYear();
    var month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    var day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function submitForm() {
    // Get form values
    var checkin_date_raw = document.getElementById("checkin_date").value;
    var checkout_date_raw = document.getElementById("checkout_date").value;

    // Ensure dates are in YYYY-MM-DD format
    var checkin_date = formatDateToYYYYMMDD(checkin_date_raw);
    var checkout_date = formatDateToYYYYMMDD(checkout_date_raw);

    var group_adults = document.getElementById("group_adults").value;
    var group_children = document.getElementById("group_children").value;
    var destination = document.getElementById("ss").value;

    // Ensure all fields are filled
    if (!checkin_date || !checkout_date || !destination) {
        alert("Please fill in all the required fields.");
        return;
    }

    // Construct URLs
    var bookingUrl = `https://www.booking.com/searchresults.html?checkin=${checkin_date}&checkout=${checkout_date}&group_adults=${group_adults}&group_children=${group_children}&ss=${encodeURIComponent(destination)}`;
    var trivagoUrl = `https://www.trivago.in/?aDateRange%5Bcheckin%5D=${checkin_date}&aDateRange%5Bcheckout%5D=${checkout_date}&aRooms%5B0%5D%5Badults%5D=${group_adults}&aRooms%5B0%5D%5Bchildren%5D=${group_children}&sQuery=${encodeURIComponent(destination)}`;
    var expediaUrl = `https://www.expedia.com/Hotel-Search?destination=${encodeURIComponent(destination)}&checkin_date=${checkin_date}&checkout_date=${checkout_date}&adults=${group_adults}&children=${group_children}`;
    var agodaUrl = `https://www.agoda.com/en-gb/search?city=${encodeURIComponent(destination)}&checkin=${checkin_date}&checkout=${checkout_date}&adults=${group_adults}&children=${group_children}`;
    var hotelsUrl = `https://www.hotels.com/search.do?destination=${encodeURIComponent(destination)}&checkin_date=${checkin_date}&checkout_date=${checkout_date}&adults=${group_adults}&children=${group_children}`;
    var airbnbUrl = `https://www.airbnb.com/s/${encodeURIComponent(destination)}/homes?checkin=${checkin_date}&checkout=${checkout_date}&adults=${group_adults}&children=${group_children}`;

    // Open URLs in new tabs
    [bookingUrl, trivagoUrl, expediaUrl, agodaUrl, hotelsUrl, airbnbUrl].forEach((url) => {
        window.open(url, "_blank");
    });
}

  



