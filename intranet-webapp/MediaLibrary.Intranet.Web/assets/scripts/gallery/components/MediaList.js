import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ThumbnailLink = styled.a`
  width: 30%;
  min-width: 5rem;
  max-width: 12rem;
  margin-right: 1rem;
`

const Thumbnail = styled.img`
  display: inline-block;
  width: 100%;
  height: auto;
`

const MediaList = ({ results }) => {
  const renderedItems = results.map((result) => {
    var upploaddate = new Date(result.uploaddate)
    var date = upploaddate.toLocaleDateString("en-GB")
    return (
      <div key={result.id}>
        <div className="media p-3 my-3">
          <ThumbnailLink href={result.link}>
            <Thumbnail src={result.thumbnail} alt={result.name} />
          </ThumbnailLink>
          <div className="d-flex w-100 media-body">
            <div className="w-50">
              <h5 className="mt-0">
                <a className="listview-text text-decoration-none text-dark" href={result.link}>{result.project}</a>
              </h5>
              <p className="mb-0">{result.caption}</p>
              {result.area}
            </div>
            <div className="text-right w-50">
              Uploaded {date}
              <br />
              {result.author}
            </div>
          </div>

        </div>
        <hr />
      </div>
    )
  })

  return <div className="media-list">{renderedItems}</div>
}

MediaList.propTypes = {
  results: PropTypes.array,
}

export default MediaList
