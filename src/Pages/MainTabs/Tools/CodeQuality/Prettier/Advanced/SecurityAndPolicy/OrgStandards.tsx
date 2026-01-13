import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OrgStandards = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Advanced/SecurityAndPolicy/OrgStandards';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Org Standards" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OrgStandards;
