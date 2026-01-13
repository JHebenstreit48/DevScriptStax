import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TokenRotation = () => {
  const markdownFilePath = 'Stacks/MERN/Advanced/Security/TokenRotation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Token Rotation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TokenRotation;
