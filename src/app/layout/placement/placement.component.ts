import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.scss']
})
export class PlacementComponent implements OnInit {

	company = [
		{ name:'ABN AMRO BANK'}, { name:' L & T INFOTECH LTD.'}, { name:'ADITYA BIRLA GROUP'}, 
		{ name:'LARSON & TOUBRO'}, { name:'ACCENTURE'}, { name:'LAXMI PRESCISION'},
		{ name:'AIR INDIA'}, { name:'LG ELECTRONICS'}, { name:'AMEX FINANCIAL SERVICE'},
		{ name:'MAHINDRA & MAHINDRA'}, { name:'ANZ GRINDLAYS'}, { name:'MAHINDRA SATYAM'},
		{ name:'APEX TECHNOLOGIES'}, { name:'MANGLORE CHEMICALS'}, { name:'ASIAN PAINTS'},
		{ name:'MARICO INDUSTRIES'}, { name:'AXIS BANK'}, { name:'MARUTI UDYOG LTD.'},
		{ name:'BANK OF AMERICA'}, { name:'MASTEK'}, { name:'BARCLAYS BANK'},
		{ name:'MAX NEWYORK LIFE INSURANCE'}, { name:'BARCLAYS FINANCE'}, { name:'MCKINSEY'},
		{ name:'BAJAJ ALLIANZ'}, { name:'METLIFE INSURANCE'}, { name:'BHARAT PETROLEUM CO. LTD.'},
		{ name:'MINDTREE CONSULTING'}, { name:'BIRLA MANAGEMENT CORPN.'}, { name:'MITCHELL MADISON GROUP'},
		{ name:'BOOZALLEN & HAMILTON'}, { name:'MPHASIS'}, { name:'BOSTON CONSULTING GROUP'},
		{ name:'NESTLE'}, { name:'BPL LIMITED'}, { name:'NEXGENIX'},
		{ name:'BRISTELCONE'}, { name:'NIIT'}, { name:'BRITANNIA INDUSTRIES'},
		{ name:'NIRMA GROUP'}, { name:'CADBURY'}, { name:'ONGC'},
		{ name:'CANNON'}, { name:'ONIDA'}, { name:'CARE INDIA'},
		{ name:'ORACLE'}, { name:'CAREER LAUNCHER'}, { name:'ORBIT – E - CONSULTING'},
		{ name:'CASTROL'}, { name:'OWENS CORNING'}, { name:'CADILLA PHARMA. LTD.'},
		{ name:'PATNI COMPUERS'}, { name:'CEAT'}, { name:'PEPSI CO.'},
		{ name:'CELTRON INDIA PVT. LTD.'}, { name:'PHILIPS'}, { name:'CITI BANK'},
		{ name:'PARLE AGRO LTD.'}, { name:'CITICORP INFORMATION TECHNOLOGY'}, { name:'PHILIPS SOFTWARE'},
		{ name:'CIPLA'}, { name:'PIDILITE'}, { name:'COCO COLA'},
		{ name:'PLANET ASIA GROUP'}, { name:'CONCOR'}, { name:'POWER FINANCE CORPORATION'}, 
		{ name:'COGNIZANT TECHNOLOGIES'}, { name:'POWER TRADING CORPORATION'}, { name:'COLGATE PALMOLIVE'},
		{ name:'PRICE WATERHOUSE COOPERS'}, { name:'COMPAQ'}, { name:'PROCTOR & GAMBLE'},
		{ name:'CONCOR'}, { name:'PRIDE HOTEL'}, { name:'CONOCO LUBRICANTS'},
		{ name:'REMI INDUSTRIES LTD.'}, { name:'CRISIL'}, { name:'REUTERS'},
		{ name:'DABUR'}, { name:'REGUS'}, { name:'DELLOITTE CONSULTING'},
		{ name:'RPG ENTERPRISES'}, { name:'DEUSCHE BANK - GLOBAL'}, { name:'SAINT GOBAIN'},
		{ name:'DEUSCHE BANK - INDIA'}, { name:'SAMSUNG'}, { name:'DSP MERRIL LYNCH'},
		{ name:'SAPIENT'}, { name:'FEDERAL EXPRESS'}, { name:'SBI CAPITAL MARKET'},
		{ name:'FEDERAL BANK'}, { name:'SBI MUTUAL FUND'}, { name:'FUTURE GROUP'},
		{ name:'SIEMENS'}, { name:'FULLERTON INDIA'}, { name:'SONATA'},
		{ name:'GE CAPITAL'}, { name:'SONY ENTERPRISES TV LTD'}, { name:'GE INDIA'},
		{ name:'SONY GROUP'}, { name:'GE MONEY'}, { name:'SQL STAR INTERNATIONAL'},
		{ name:'GENERAL MOTORS'}, { name:'STANDARD CHARTERED BANK'}, { name:'GLAXO INDUSTRIES'},
		{ name:'STAR TV'}, { name:'GLOBAL TRUST BANK'}, { name:'STERLITE INDUSTRIES'},
		{ name:'GODREJ'}, { name:'TALISMA CORPORATION'}, { name:'HCL INFOTECH'},
		{ name:'TANNING TECHNOLOGIES'}, { name:'HCL PEROT'}, { name:'TATA ADMINISTATION SERVICE'},
		{ name:'HCL TECHNOLOGIES'}, { name:'TATA CONSULTANCY SERVICE'}, { name:'HDFC BANK'},
		{ name:'TATA FLEXSI'}, { name:'HDFC INSURANCE'}, { name:'TATA IBM'}, 
		{ name:'HEINZ INDIA'}, { name:'TATA INFOTECH'}, { name:'HERO HONDA'},
		{ name:'TAJ GROUP OF HOTELS'}, { name:'HEWITT ASSOCIATES'}, { name:'TITAN'},
		{ name:'HINDUSTAN UNILEVER LTD.'}, { name:'TECH MAHINDRA'}, 	{ name:'HINDUSTAN THOMPSON ASSOC.'},
		{ name:'TIMES OF INDIA'}, { name:'HSBC GLOBAL'}, { name:'T- SERIES'},
		{ name:'HSBC BANK'}, { name:'UNIVERSAL HONDA'}, { name:'IBM INDIA'},
		{ name:'UNITECH'}, { name:'IBP COMPANY'}, { name:'ULTRATECH CEMENT'},
		{ name:'ICICI BANK'}, { name:'UNITED BREWERIES'}, { name:'ICICI PRUDENTIAL'}
	];
  constructor( public router: Router ) { }

  ngOnInit() {
  }
}