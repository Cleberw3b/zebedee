import { configure } from 'enzyme'
import ReactSixteenAdapter from 'enzyme-adapter-react-16'
import { config } from 'dotenv'

config()
configure( { adapter: new ReactSixteenAdapter() } )
