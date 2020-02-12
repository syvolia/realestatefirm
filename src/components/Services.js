import React, { Component } from "react";
import { FaExpeditedssl, FaAirbnb, FaCcVisa } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
                 state = {
                   services: [
                     {
                       icon: <FaExpeditedssl />,
                       title: "Trusted by Thousands",
                       info:
                         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
                     },
                     {
                       icon: <FaAirbnb />,
                       title: "Wide range of Properties",
                       info:
                         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
                     },
                     {
                       icon: <FaCcVisa />,
                       title: "Financing made easy",
                       info:
                         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
                     },
                     {
                       icon: <FaExpeditedssl />,
                       title: "Secure",
                       info:
                         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
                     }
                   ]
                 };
                 render() {
                   return (
                     <section className="services">
                       <Title title="Why Choose Us" />
                       <div className="services-center">
                         {this.state.services.map(item => {
                           return (
                             <article
                               key={`item-${item.title}`}
                               className="service"
                             >
                               <span>{item.icon}</span>
                               <h6>{item.title}</h6>
                               <p>{item.info}</p>
                             </article>
                           );
                         })}
                       </div>
                     </section>
                   );
                 }
               }
