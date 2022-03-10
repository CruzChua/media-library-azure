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
    return (
      <div key={result.id}>
        <div className="media p-3 my-3">
          <ThumbnailLink href={result.link}>
            <Thumbnail src={result.thumbnail} alt={result.name} />
          </ThumbnailLink>
          <div className="media-body">
            <h5 className="mt-0">
              <a className="listview-text text-decoration-none text-dark" href={result.link}>{result.name}</a>
            </h5>
            <p className="mb-0">{result.caption}</p>
            <p><em>Location</em></p>
            <p className="position-relative bottom-0 end-0">By</p>
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
