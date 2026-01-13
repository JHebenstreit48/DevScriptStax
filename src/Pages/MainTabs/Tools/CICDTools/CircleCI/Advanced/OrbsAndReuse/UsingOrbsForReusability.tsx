import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UsingOrbsForReusability = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Advanced/OrbsAndReuse/UsingOrbsForReusability';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Using Orbs for Reusability" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UsingOrbsForReusability;
