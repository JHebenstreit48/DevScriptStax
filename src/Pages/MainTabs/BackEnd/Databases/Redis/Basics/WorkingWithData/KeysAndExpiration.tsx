import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const KeysAndExpiration = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Basics/WorkingWithData/KeysAndExpiration';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Keys & Expiration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KeysAndExpiration;
