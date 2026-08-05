import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UsingOrbsForReusability = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Advanced/OrbsAndReuse/UsingOrbsForReusability';

  return (
    <>
      <PageLayout>
        <PageTitle title="Using Orbs for Reusability" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UsingOrbsForReusability;
