import React, { useMemo } from 'react'

import { Loading } from '../../../common/components/Loading'
import { PageHeader } from '../../../common/components/page/PageHeader'
import { PageTitle } from '../../../common/components/page/PageTitle'
import { WorkingGroupsList } from '../../../working-groups/components/WorkingGroupsList'
import { useWorkingGroups } from '../../../working-groups/hooks/useWorkingGroups'
import { AppPage } from '../../components/AppPage'

import { WorkingGroupsTabs } from './components/WorkingGroupsTabs'

export const WorkingGroups = () => {
  const { isLoading, groups } = useWorkingGroups()

  const crumbs = useMemo(
    () => [
      { href: '#', text: 'Working Groups' },
      { href: '#', text: 'Working Groups' },
    ],
    []
  )

  if (isLoading) {
    return <Loading />
  }

  return (
    <AppPage crumbs={crumbs}>
      <PageHeader>
        <PageTitle>Working Groups</PageTitle>
        <WorkingGroupsTabs />
      </PageHeader>
      <WorkingGroupsList groups={groups} />
    </AppPage>
  )
}
