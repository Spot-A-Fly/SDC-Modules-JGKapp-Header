# API DOCUMENTATION

## Routes

#### GET

*Route:*
`data/artist?artistId=<id>`

*Output:*
```
{
    "message": "Successfully retrieved artist",
    "artist": [
        {
            "artist_id": 1,
            "artist_name": "Djay Van Der Bent",
            "artist_img_url": "https://images.unsplash.com/photo-1530521787020-1c92aaf87aa3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80"
        }
    ]
}
```

*Route:*
`data/artist?artistName=<name>`

*Output:*
```
{
    "message": "Successfully retrieved artist",
    "artist": [
        {
            "artist_id": 1,
            "artist_name": "Djay Van Der Bent",
            "artist_img_url": "https://images.unsplash.com/photo-1530521787020-1c92aaf87aa3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80"
        }
    ]
}
```

#### POST

*Route:*
`data/artist/`

*Body:*
Should include `artistName` and `artistImgUrl` keys

*Output:*
```
{
  "message": "Successfully added new artist"
}
```

#### PUT
*Route:*
`data/artist/`

*Body:*
Should include `artistID` `artistName` and `artistImgUrl` keys

*Output*
```
{
  "message": "Successfully updated artist"
}
```

#### DELETE
*Route:*
`data/artist?artistId=<id>`

*Output*
```
{
  "message": "Successfully deleted artist"
}
```