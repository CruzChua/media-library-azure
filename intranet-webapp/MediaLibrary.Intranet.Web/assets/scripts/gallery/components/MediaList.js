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
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-1 bi bi-pin-map" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
              </svg>
              {result.area}
            </p>
            <p className="position-relative bottom-0 end-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-1 bi bi-person-plus" viewBox="0 0 16 16">
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
              </svg>
              {result.author}
            </p>
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
