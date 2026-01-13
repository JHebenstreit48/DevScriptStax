import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ScalingSystems = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authorization/Advanced/SystemsAndDesign/ScalingSystems';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Scaling Systems" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ScalingSystems;
