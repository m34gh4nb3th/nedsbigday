import React, {useState, useEffect} from 'react';
import {getAllGuests} from '../../Database/guests'
import {Table} from 'antd'

const RSVPList = (props) => {
  const [guests, setGuests] = useState([])
  const [queryCount, setQueryCount] = useState(0)

  useEffect(() => {
    getAllGuests().then(guestsRes => {
      if (queryCount < 3) setGuests(guestsRes)
      else console.log('above query limit')
      setQueryCount(queryCount + 1)
    })
  }, [])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'full_name',
      key: 'full_name',
      sorter: (a,b) => a.full_name.localeCompare(b.full_name)
    },
    {
      title: 'Rehearsal',
      dataIndex: 'attending_rehearsal_dinner',
      key: 'attending_rehearsal_dinner',
      filters: [
        {
          text: 'Yes',
          value: 'Yes',
        },
        {
          text: 'No',
          value: 'No',
        },
        {
          text: 'No Answer',
          value: 'empty',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => {
        if (value === 'empty') return record.attending_rehearsal_dinner
        return record.attending_rehearsal_dinner === value
      }
    },
    {
      title: 'Happy Hour',
      dataIndex: 'attending_happy_hour',
      key: 'attending_happy_hour',
      filters: [
        {
          text: 'Yes',
          value: 'Yes',
        },
        {
          text: 'No',
          value: 'No',
        },
        {
          text: 'No Answer',
          value: 'empty',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => {
        if (value === 'empty') return !record.attending_happy_hour
        return record.attending_happy_hour === value
      }
    },
    {
      title: 'Reception',
      dataIndex: 'attending_reception',
      key: 'attending_reception',
      filters: [
        {
          text: 'Yes',
          value: 'Yes',
        },
        {
          text: 'No',
          value: 'No',
        },
        {
          text: 'No Answer',
          value: 'empty',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => {
        if (value === 'empty') return record.attending_reception
        return record.attending_reception === value
      }
    },
    {
      title: 'Farewell',
      dataIndex: 'attending_farewell_brunch',
      key: 'attending_farewell_brunch',
      filters: [
        {
          text: 'Yes',
          value: 'Yes',
        },
        {
          text: 'No',
          value: 'No',
        },
        {
          text: 'No Answer',
          value: 'empty',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => {
        if (value === 'empty') return record.attending_farewell_brunch
        return record.attending_farewell_brunch === value
      }
    },
  ]

  return (
    <div>
      <h2>Top Secret Guest RSVPs</h2>
      <Table
        dataSource={guests}
        columns={columns}
      />
    </div>
  )
}

export default RSVPList;