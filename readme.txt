        {data === "0" ?(
                <div>Loading</div>
                ) : (
                <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title>{data.city}</Card.Title>
                    <Card.Text>
                        {data.temperature}°C
                    </Card.Text>
                    <Card.Text>
                        {data.forecast}
                    </Card.Text>
                    <Card.Img style={{ width: '80px', height: '80px' }} variant="top" src={data.iconUrl + data.icon + `.png`} />
                </Card.Body>)}