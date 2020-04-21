import Link from "next/link";
import React from "react";

class SearchBars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personQuery: '',
            businessQuery: ''
        };
    }

    handlePeopleChange(e){
        this.setState({personQuery: e.target.value})
    }

    handleBusinessChange(e){
        this.setState({businessQuery: e.target.value})
    }

    getQuery(){
        console.log("clicked!")
    }

    render() {
        return(
            <div>
                <div>
                    <h3> Search People</h3>
                    <input type='text' value={this.state.personQuery} onChange={(event => this.handlePeopleChange(event))}
                    />
                    <button id='searchButton' onClick={()=>{this.getQuery}}>
                        <Link href={`/public/${this.state.personQuery}`}>
                            <a> Go </a>
                        </Link>
                    </button>
                </div>
                <div>
                    <h3> Search Businesses</h3>
                    <input type='text' value={this.state.businessQuery} onChange={(event => this.handleBusinessChange(event))}
                    />
                    <button id='searchButton' onClick={()=>{this.getQuery}}>
                        <Link href={`/search/${this.state.businessQuery}`}>
                            <a> Go </a>
                        </Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default SearchBars