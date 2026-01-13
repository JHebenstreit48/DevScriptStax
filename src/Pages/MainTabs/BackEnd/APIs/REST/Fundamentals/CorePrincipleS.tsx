import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CorePrincipleS = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/Fundamentals/CorePrincipleS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Core PrincipleS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CorePrincipleS;
