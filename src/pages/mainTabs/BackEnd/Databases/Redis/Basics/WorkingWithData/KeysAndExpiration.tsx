import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const KeysAndExpiration = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Basics/WorkingWithData/KeysAndExpiration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Keys & Expiration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KeysAndExpiration;
