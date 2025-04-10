export const buttonsArrays = ["All", "Music", "Webseries", "Movies", "Cars", "Ev", "Buses", "Drama", "Comedy", "Films", "Music", "Webseries", "Movies", "Cars", "Bikes" , "Music", "Webseries", "Movies", "Cars", "Ev", "Buses", "Drama", "Comedy", "Films", "Music", "Webseries", "Movies", "Cars", "Bikes"]

const OLD_YOUR_API_KEY = "AIzaSyC3pBlgANl8hi-z8kHZqRhOpfkRH66aHFM"

const YOUR_API_KEY = "AIzaSyAaOENA0KNiGBQ57ngTEYLocXXU9AWA5CM"

export const YOUTUBE_API_KEY = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + [YOUR_API_KEY];

export const YOUTUBE_SEARCH_API_KEY = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YouTubeCommentsAPI  = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&key=${YOUR_API_KEY}`;

export const ClickedSearchBoxTextResults  =  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&key=AIzaSyC3pBlgANl8hi-z8kHZqRhOpfkRH66aHFM&q="

export const searchDataHardCoded = {
    "kind": "youtube#searchListResponse",
    "etag": "r3PfsqvyPUvirb9KBCwMATn4nHI",
    "nextPageToken": "CAMQAA",
    "regionCode": "IN",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 3
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "U1Xh-hknS0Ui6bh1PqUYVW5D7xw",
        "id": {
          "kind": "youtube#video",
          "videoId": "nJG5CWsne8E"
        },
        "snippet": {
          "publishedAt": "2025-03-14T04:00:06Z",
          "channelId": "UCjK8ORC71kwyj1DWFwril_A",
          "title": "Selena Gomez, benny blanco - Sunset Blvd (Official Video)",
          "description": "Selena Gomez, benny blanco - Sunset Blvd (Official Video) Pre-order “I Said I Love You First”, out March 21: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/nJG5CWsne8E/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/nJG5CWsne8E/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/nJG5CWsne8E/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "SelenaGomezVEVO",
          "liveBroadcastContent": "none",
          "publishTime": "2025-03-14T04:00:06Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "o00Wvh59s2vA0PEwBCarqtbvbSE",
        "id": {
          "kind": "youtube#channel",
          "channelId": "UCPNxhDvTcytIdvwXWAm43cA"
        },
        "snippet": {
          "publishedAt": "2008-02-08T14:59:05Z",
          "channelId": "UCPNxhDvTcytIdvwXWAm43cA",
          "title": "Selena Gomez",
          "description": "Official Selena Gomez YouTube Channel! “I Said I Love You First” Out 3/21 Pre-Save now!",
          "thumbnails": {
            "default": {
              "url": "https://yt3.ggpht.com/SdHhEkdZ78QM2SNYjgSRnJX_F-ulIdb-B001bxuTfzLX7rbfuEeO_GXaynLc2zp-LZQizNEB=s88-c-k-c0xffffffff-no-rj-mo"
            },
            "medium": {
              "url": "https://yt3.ggpht.com/SdHhEkdZ78QM2SNYjgSRnJX_F-ulIdb-B001bxuTfzLX7rbfuEeO_GXaynLc2zp-LZQizNEB=s240-c-k-c0xffffffff-no-rj-mo"
            },
            "high": {
              "url": "https://yt3.ggpht.com/SdHhEkdZ78QM2SNYjgSRnJX_F-ulIdb-B001bxuTfzLX7rbfuEeO_GXaynLc2zp-LZQizNEB=s800-c-k-c0xffffffff-no-rj-mo"
            }
          },
          "channelTitle": "Selena Gomez",
          "liveBroadcastContent": "none",
          "publishTime": "2008-02-08T14:59:05Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "b8skrmux-86mi8zWS_db42bw8ig",
        "id": {
          "kind": "youtube#video",
          "videoId": "4LcNr0T2yAA"
        },
        "snippet": {
          "publishedAt": "2025-03-21T04:00:03Z",
          "channelId": "UCjK8ORC71kwyj1DWFwril_A",
          "title": "Selena Gomez, benny blanco - How Does It Feel To Be Forgotten (Official Lyric Video)",
          "description": "Listen to the new album 'I Said I Love You First', out now: https://sgxbb.lnk.to/ISaidILoveYouFirst Shop new merch: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/4LcNr0T2yAA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/4LcNr0T2yAA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/4LcNr0T2yAA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "SelenaGomezVEVO",
          "liveBroadcastContent": "none",
          "publishTime": "2025-03-21T04:00:03Z"
        }
      }
    ]
  }
  

  export const VideoLength =  "https://www.googleapis.com/youtube/v3/videos?part=contentDetails&key=AIzaSyAaOENA0KNiGBQ57ngTEYLocXXU9AWA5CM&id="
