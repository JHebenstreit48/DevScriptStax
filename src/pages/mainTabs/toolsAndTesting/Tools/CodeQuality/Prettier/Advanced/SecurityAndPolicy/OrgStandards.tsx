import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OrgStandards = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Advanced/SecurityAndPolicy/OrgStandards';

  return (
    <>
      <PageLayout>
        <PageTitle title="Org Standards" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OrgStandards;
