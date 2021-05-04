let name = 'v1';
let files = [
    './main.html',
    './code_js.js',
    './styles.css',
    './'
];


self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(name).
            then(function(cache) {
                return cache.addAll(files);
            }).
            then(function() {
                // simply makes the new service worker the active one
                // I won't need to wait for the old worker (if any) to handle the fetches
                return self.skipWaiting();
            })
    );
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        // check if we have something already saved in the cache
        caches.match(event.request)
            .then(function(match){
                if(match) {
                    // if there is a match, use it
                    return match;
                } else {
                    // proceed with the fetch request
                    return fetch(event.request)
                            .then(function(response) {
                                    // open the cache and save the response
                                    return caches.open(name).
                                                then(function(cache) {
                                                        // save the response in cache for future use
                                                        cache.put(event.request, response.clone());
                                                        // return the response
                                                        return response;
                                                })
                            })
                }
            })
    );
});