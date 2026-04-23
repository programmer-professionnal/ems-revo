import { useState } from 'react'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import { Pill, Search, ChevronRight, AlertTriangle, Info, ArrowLeft } from 'lucide-react'
import Layout from '../../components/Layout'
import PharmacologyMain from './PharmacologyMain'
import PharmacologyEmergency from './PharmacologyEmergency'
import PharmacologyCardio from './PharmacologyCardio'
import PharmacologyAnalgesia from './PharmacologyAnalgesia'
import PharmacologyAntidotes from './PharmacologyAntidotes'

export default function Pharmacology() {
  const location = useLocation()
  const isMainPage = location.pathname === '/farmacologia'

  if (isMainPage) {
    return <PharmacologyMain />
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PharmacologyMain />} />
        <Route path="/urgencia" element={<PharmacologyEmergency />} />
        <Route path="/cardio" element={<PharmacologyCardio />} />
        <Route path="/analgesia" element={<PharmacologyAnalgesia />} />
        <Route path="/antidotos" element={<PharmacologyAntidotes />} />
      </Routes>
    </Layout>
  )
}