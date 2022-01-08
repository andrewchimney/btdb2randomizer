import Link from 'next/link';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div className="home">
      <ul className="cards">
        <li>
          <Link href="btdb2randomizer">
            <Card>
              <Card.Img src="images/randoscreen.png" />
              <Card.Body>
                <Card.Title>BTD Battles 2 Randomizer</Card.Title>
                <Card.Text>Generate random heroes towers or both</Card.Text>
                <Button><a href="btdb2randomizer">View</a></Button>
              </Card.Body>
            </Card>
          </Link>
        </li>
        <li>
          <Link href="btdb2vip">
            <Card>
              <Card.Img src="images/vipscreen.png" />
              <Card.Body>
                <Card.Title>BTD Battles 2 VIP Calculator</Card.Title>
                <Card.Text>Calculate the amount of games needed to unlock a monkey</Card.Text>
                <Button><a href="btdb2vip">View</a></Button>
              </Card.Body>
            </Card>
          </Link>
        </li>


      </ul>
    </div>
  )
}
